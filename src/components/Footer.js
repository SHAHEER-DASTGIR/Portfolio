export default function Footer({ darkMode }) {
  return (
    <footer className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} py-6 text-center text-gray-500`}>
      © {new Date().getFullYear()} Shaheer Dastgir. All rights reserved.
    </footer>
  );
}