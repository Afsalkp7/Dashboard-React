import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchBox() {
  return (
    <div class="search-container">
      <CiSearch />
      <input type="text" placeholder="Search..." />
    </div>
  );
}
