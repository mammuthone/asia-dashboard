// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import CredentialsProvider from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google"

// import { FirestoreAdapter } from "@auth/firebase-adapter";

// import { firebaseConfig } from "../../../../firebase/config"

// import { cert } from "firebase-admin/app";

// console.log({
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)["private_key"] : null,
// })

// const executeLogin = async(credentials, callback) => {
//     const res = await fetch("/your/endpoint", {
//         method: 'POST',
//         body: JSON.stringify(credentials),
//         headers: { "Content-Type": "application/json" }
//       })
// }

// export const authOptions = {
//     pages: {
//         signIn: '/pages/login',
//         signOut: '/pages/signout',
//         error: '/pages/error', // Error code passed in query string as ?error=
//         verifyRequest: '/auth/verify-request', // (used for check email message)
//         newUser: '/pages/register' // New users will be directed here on first sign in (leave the property out if not of interest)
//     },
//     // Configure one or more authentication providers
//     providers: [
//         CredentialsProvider({
//             // The name to display on the sign in form (e.g. "Sign in with...")
//             name: "Credentials",
//             // `credentials` is used to generate a form on the sign in page.
//             // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//             // e.g. domain, username, password, 2FA token, etc.
//             // You can pass any HTML attribute to the <input> tag through the object.
//             credentials: {
//                 email: { label: "Email", type: "text", placeholder: "jsmith@test.com" },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials, req) {
//                 // Add logic here to look up the user from the credentials supplied

//                 // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
//                 // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
//                 console.log(user)
//                 console.log(credentials)

//                 const res = await fetch("/api/auth", {
//                     method: 'POST',
//                     body: JSON.stringify(credentials),
//                     headers: { "Content-Type": "application/json" }
//                   })
//                   console.log(res)
//                 const user = await res.json()

//                 if (user) {
//                     // Any object returned will be saved in `user` property of the JWT
//                     return user
//                 } else {
//                     // If you return null then an error will be displayed advising the user to check their details.
//                     return null

//                     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//                 }
//             }
//         }),
//         Google({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET,
//         }),

//         // ...add more providers here
//     ],
//     adapter: FirestoreAdapter({
//         namingStrategy: "snake_case",
//         credential: cert({
//             projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//             clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
//             privateKey: process.env.FIREBASE_PRIVATE_KEY ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)["private_key"] : null,
//         })
//     }),
// }

// export default NextAuth(authOptions)