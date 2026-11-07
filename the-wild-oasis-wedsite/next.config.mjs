/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hdfwamhrywojwwuwkbmn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
};

export default nextConfig;


// sử dụng Cloudinary để
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     loader: 'custom',
//     loaderFile: './my-loader.ts',
//   },
// }
 
// module.exports = nextConfig