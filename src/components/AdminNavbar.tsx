import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
  return (
    <>
      <nav className="flex items-center justify-end px-2 sm:px-4 xl:px-6 gap-3 md:gap-10 py-4 bg-white">
        <Link href={"/"}>Home</Link>
        <Link href={"/admin"}>Dashboard</Link>
        <Link href={"/admin/product"}>Products</Link>
        <Link href={"/customers"}>Customers</Link>
      </nav>
    </>
  );
};

export default AdminNavbar;
