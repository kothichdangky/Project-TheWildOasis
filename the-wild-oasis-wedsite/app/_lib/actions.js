"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut, auth } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw Error("You need log in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provider a valid national ID");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");

  return data;
}

export async function createReservation(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You need signin");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect(`/cabins/thankyou`)
}

export async function updateReservation(formData) {
  const session = await auth();
  if (!session) throw new Error("You need signin");

  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations");
  const id = Number(formData.get("id"));

  const updatedFields = { numGuests, observations };

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((book) => book.id);

  if (!guestBookingIds.includes(id))
    throw new Error("You need signin your account ");

  const { error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  revalidatePath(`/account/reservations/edit/${id}`);
  redirect("/account/reservations");
}

export async function deleteReservation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You need signin");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((book) => book.id);

  if (!guestBookingIds.includes(bookingId))
    throw new Error("You need signin your account ");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
