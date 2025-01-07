import { useState } from "react";
import { TextField, Box } from "@radix-ui/themes";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { RxCaretSort } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
// import { Overview } from "./Overview";

function App() {
  const [selectedItem, setSelectedItem] = useState("Alicia Koch");
  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const options = [
    { name: "Alicia Koch", profilePic: true, type: "personal" },
    { name: "Acme Inc.", profilePic: true, type: "team" },
    { name: "Monsters Inc.", profilePic: true, type: "team" },
  ];

  return (
    <>
      <nav className="w-screen border-b bg-white flex items-center justify-between px-4 py-2">
        <div className="menu flex items-center space-x-6">
          {/* Dropdown */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                  {selectedItem}
                </div>
                <RxCaretSort className="ml-2 text-gray-600" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
              className="bg-white rounded-lg shadow-lg w-64 p-2"
              align="start"
            >
              {/* Search */}
              <div className="p-2">
                <input
                  type="text"
                  placeholder="Search team..."
                  className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Personal */}
              <div className="px-4 py-2 text-sm text-gray-500">
                Personal Account
              </div>
              {options
                .filter((option) => option.type === "personal")
                .map((option) => (
                  <DropdownMenu.Item
                    key={option.name}
                    className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer"
                    onSelect={() => handleItemSelect(option.name)}
                  >
                    <div className="w-4 h-4 rounded-full bg-black mr-2"></div>
                    {option.name}
                    {selectedItem === option.name && (
                      <FaCheck className="ml-auto text-black" />
                    )}
                  </DropdownMenu.Item>
                ))}

              {/* Teams */}
              <div className="px-4 py-2 text-sm text-gray-500">Teams</div>
              {options
                .filter((option) => option.type === "team")
                .map((option) => (
                  <DropdownMenu.Item
                    key={option.name}
                    className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer"
                    onSelect={() => handleItemSelect(option.name)}
                  >
                    <div className="w-4 h-4 rounded-full bg-black mr-2"></div>
                    {option.name}
                    {selectedItem === option.name && (
                      <FaCheck className="ml-auto text-black" />
                    )}
                  </DropdownMenu.Item>
                ))}

              <DropdownMenu.Item className="px-4 py-2 flex items-center gap-2 text-blue-500 hover:bg-gray-100 cursor-pointer">
                <AiOutlinePlus />
                Create Team
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          {/* Nav */}
          <NavigationMenu.Root>
            <NavigationMenu.List className="flex space-x-4 cursor-pointer">
              <NavigationMenu.Item>
                <NavigationMenu.Link className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                  Overview
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                  Customers
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                  Products
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link className="px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                  Settings
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>

            <NavigationMenu.Viewport />
          </NavigationMenu.Root>
        </div>
        {/* Search */}
        <div className="flex items-center">
          <TextField.Root placeholder="Search..."></TextField.Root>

          <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8 ml-3">
            <img src="/src/assets/01.png" alt="" />
          </span>
        </div>
      </nav>
    </>
  );
}

export default App;
