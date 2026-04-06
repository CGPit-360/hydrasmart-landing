
  # Design HydraSmart Bottle Landing Page

  This is a code bundle for Design HydraSmart Bottle Landing Page. The original project is available at https://www.figma.com/design/BmSyGtK5iz0n5jiKSUZ7u6/Design-HydraSmart-Bottle-Landing-Page.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Firebase database setup (Firestore)

  1. Create a Firebase project.
  2. Enable Firestore Database in your Firebase console.
  3. Copy `.env.example` to `.env` and fill in your `VITE_FIREBASE_*` values.
  4. Start the app with `npm run dev`.

  The checkout action in the cart now creates an order document in Firestore:

  - Collection: `orders`
  - Fields: `items`, `totalItems`, `subtotal`, `currency`, `status`, `createdAt`
  