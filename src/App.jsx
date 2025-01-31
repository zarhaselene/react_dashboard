import { useState } from "react";
import {
  TextField,
  Text,
  Separator,
  Box,
  Heading,
  SegmentedControl,
  Avatar,
  Grid,
  Card,
  Flex,
} from "@radix-ui/themes";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { RxCaretSort } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Overview } from "./Overview.jsx";

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
  const user = "shadcn";
  const userEmail = "m@example.com";

  const sales = [
    {
      profilePic: "./src/assets/01.png",
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      amount: "1999.00",
    },
    {
      profilePic: "./src/assets/02.png",
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      amount: "39.00",
    },
    {
      profilePic: "./src/assets/03.png",
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      amount: "299.00",
    },
    {
      profilePic: "./src/assets/04.png",
      name: "William Kim",
      email: "will@email.com",
      amount: "99.00",
    },
    {
      profilePic: "./src/assets/05.png",
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      amount: "39.00",
    },
  ];

  return (
    <>
      <Flex direction={"column"} className="px-5 w-screen">
        {/* Nav */}
        <Flex
          align={"center"}
          justify={"between"}
          className="w-full border-b bg-white py-2"
        >
          {" "}
          <Flex align={"center"} className="space-x-6">
            {/* Dropdown Menu */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="flex items-center py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200">
                  <Flex align={"center"} gap={"2"}>
                    <Box className="w-4 h-4 bg-black rounded-full"></Box>
                    {selectedItem}
                  </Flex>
                  <RxCaretSort className="ml-2 text-gray-600" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Content
                className="bg-white rounded-lg shadow-lg w-64 p-2 z-10"
                align="start"
              >
                {/* Search */}
                <Box className="p-2">
                  <input
                    type="text"
                    placeholder="Search team..."
                    className="w-full py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </Box>

                {/* Personal */}
                <Box className="py-2 text-sm text-gray-500">
                  Personal Account
                </Box>
                {options
                  .filter((option) => option.type === "personal")
                  .map((option) => (
                    <DropdownMenu.Item
                      key={option.name}
                      className="py-2 flex items-center hover:bg-gray-100 cursor-pointer"
                      onSelect={() => handleItemSelect(option.name)}
                    >
                      <Box className="w-4 h-4 rounded-full bg-black mr-2"></Box>
                      {option.name}
                      {selectedItem === option.name && (
                        <FaCheck className="ml-auto text-black" />
                      )}
                    </DropdownMenu.Item>
                  ))}
                {/* Teams */}
                <Box className="py-2 text-sm text-gray-500">Teams</Box>
                {options
                  .filter((option) => option.type === "team")
                  .map((option) => (
                    <DropdownMenu.Item
                      key={option.name}
                      className="py-2 flex items-center hover:bg-gray-100 cursor-pointer"
                      onSelect={() => handleItemSelect(option.name)}
                    >
                      <Box className="w-4 h-4 rounded-full bg-black mr-2"></Box>
                      {option.name}
                      {selectedItem === option.name && (
                        <FaCheck className="ml-auto text-black" />
                      )}
                    </DropdownMenu.Item>
                  ))}
                <DropdownMenu.Item className="py-2 flex items-center gap-2 text-blue-500 hover:bg-gray-100 cursor-pointer">
                  <AiOutlinePlus />
                  Create Team
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            {/* Navigation Menu */}
            <NavigationMenu.Root>
              <NavigationMenu.List className="flex space-x-4 cursor-pointer">
                <NavigationMenu.Item>
                  <NavigationMenu.Link className="py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                    Overview
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link className="py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                    Customers
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link className="py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                    Products
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link className="py-2 text-sm font-medium text-gray-900 hover:text-blue-500">
                    Settings
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
              <NavigationMenu.Viewport />
            </NavigationMenu.Root>
          </Flex>
          <Flex align={"center"}>
            {/* Search */}
            <TextField.Root placeholder="Search..."></TextField.Root>

            {/* Profile Dropdown */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                {/* Profile pic */}
                <Avatar
                  className="ml-3"
                  src="/src/assets/01.png"
                  alt="Profile picture"
                />
              </DropdownMenu.Trigger>

              <DropdownMenu.Content
                className="bg-white rounded-lg shadow-lg w-64 p-4 z-10"
                align="end"
              >
                <Box className="pt-4 text-xs text-gray-800 font-semibold">
                  {user}
                </Box>
                <Box className="py-2 text-xs text-gray-600">{userEmail}</Box>
                <Separator my="1" size="4" />

                {/* Menu Options */}
                <Box className="space-y-2">
                  {["Profile", "Billing", "Settings", "New Team"].map(
                    (option) => (
                      <DropdownMenu.Item
                        key={option}
                        className="py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </DropdownMenu.Item>
                    )
                  )}
                </Box>
                <Separator my="1" size="4" />

                {/* Logout */}
                <DropdownMenu.Item className="py-2 text-sm hover:bg-gray-100 cursor-pointer">
                  Logout
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
        </Flex>
        <Box width={{ xl: "1600px" }} className="m-auto">
          {/* Dashboard */}
          <Box py="8">
            <Heading as="h3" className="mb-8">
              Dashboard
            </Heading>
            <SegmentedControl.Root defaultValue="overview" radius="large">
              <SegmentedControl.Item value="overview">
                Overview
              </SegmentedControl.Item>
              <SegmentedControl.Item value="analytics">
                Analytics
              </SegmentedControl.Item>
              <SegmentedControl.Item value="reports">
                Reports
              </SegmentedControl.Item>
              <SegmentedControl.Item value="notifications">
                Notifications
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </Box>
          <Grid columns={{ md: "4", sm: "2" }} gap="4" width="auto">
            <Box>
              <Card size="2">
                <Text as="div" className="text-xl font-bold mb-2">
                  Total Revenue
                </Text>
                <Text as="div" className="text-4xl font-bold">
                  $45,231.89
                </Text>
                <Text as="div" className="text-gray-500 mt-2">
                  +20% from last month
                </Text>
              </Card>
            </Box>

            <Box>
              <Card size="2">
                <Text as="div" className="text-xl font-bold mb-2">
                  Subscriptions
                </Text>
                <Text as="div" className="text-4xl font-bold">
                  +2350
                </Text>
                <Text as="div" className="text-gray-500 mt-2">
                  +80% from last month
                </Text>
              </Card>
            </Box>

            <Box>
              <Card size="2">
                <Text as="div" className="text-xl font-bold mb-2">
                  Sales
                </Text>
                <Text as="div" className="text-4xl font-bold">
                  +1,234
                </Text>
                <Text as="div" className="text-gray-500 mt-2">
                  +19% from last month
                </Text>
              </Card>
            </Box>

            <Box>
              <Card size="2">
                <Text as="div" className="text-xl font-bold mb-2">
                  Active Now
                </Text>
                <Text as="div" className="text-4xl font-bold">
                  +573
                </Text>
                <Text as="div" className="text-gray-500 mt-2">
                  +20 since last hour
                </Text>
              </Card>
            </Box>
          </Grid>
          <Flex
            direction={{ initial: "column", md: "row" }}
            gapX={"4"}
            gapY={{ initial: "0", md: "2" }}
          >
            {/* Overview section */}
            <Box width={{ initial: "100%", md: "60%" }} className="py-5">
              <Card size="2">
                <Heading size="3" className="pb-4">
                  Overview
                </Heading>
                <Overview />
              </Card>
            </Box>
            {/* Sales section */}
            <Box
              width={{ initial: "100%", md: "40%" }}
              className="lg:py-5 py-0"
            >
              <Card size="2">
                <Heading size="3" className="pb-2">
                  Recent Sales
                </Heading>
                <Text as="p" size={"2"}>
                  You made 265 sales this month.
                </Text>
                <Box as="ul" className="sales-list" mt={3}>
                  {sales.map((sale, index) => (
                    <Box
                      as="li"
                      key={index}
                      className="sale-item flex items-center justify-between py-2"
                    >
                      {/* Profile picture and details */}
                      <Flex align={"center"} justify={"between"}>
                        <Flex>
                          {sale.profilePic && (
                            <Avatar
                              className="mr-2"
                              size="small"
                              src={
                                sale.profilePic !== true
                                  ? sale.profilePic
                                  : undefined
                              }
                              alt={sale.name}
                              fallback={sale.name.charAt(0)}
                            />
                          )}
                          <Box>
                            <Text as="p" size="2" weight="bold">
                              {sale.name}
                            </Text>
                            <Text as="p" size="2" color="muted">
                              {sale.email}
                            </Text>
                          </Box>
                        </Flex>

                        {/* Sale amount */}
                        <Text as="p" size="2" weight="bold">
                          +${sale.amount}
                        </Text>
                      </Flex>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default App;
