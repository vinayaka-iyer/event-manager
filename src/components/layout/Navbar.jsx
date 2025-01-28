import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser, selectCurrentUsername } from '../../services/auth/authSlice';


  const Navbar = () => {
    const user = useSelector(selectCurrentUser)
    const username = useSelector(selectCurrentUsername)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout())
      navigate("/login");
  };
    return (
      <Card className="bg-card py-2 px-4 border-0 md:justify-around  justify-between flex gap-6 rounded-2xl mt-5 w-full">
        <div className="font-bold text-lg">
          EventEase
        </div>
  
        <ul className="hidden md:flex items-center gap-10 text-card-foreground">
          {user &&
          <>
            <li>
            <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/events/create">Create</Link>
            </li>
            </>
          }
          
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/solutions">Solutions</Link>
          </li>
        </ul>
  
        <div className="flex items-center">
        {user ?
        <><Button variant="outline" className="text-sm w-full mr-2 hidden md:block">Welcome {username}</Button>
         <Button onClick={handleLogout} className="w-full text-sm mr-2 hidden md:block">
                    Logout
        </Button>
        </>  
        :  <Button onClick={() => navigate('/login')} className="w-full text-sm mr-2 hidden md:block">
                    Login
                  </Button> }
  
          <div className="flex md:hidden mr-2 items-center gap-2 ">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              </DropdownMenuTrigger>
            </DropdownMenu>
  
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5 rotate-0 scale-100 " />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
              {user &&
                <DropdownMenuItem>
                <Button variant="outline" className="w-full text-sm">Welcome {username}</Button>
                </DropdownMenuItem>
              }
              <Link to="/events">
                <DropdownMenuItem >
                  Events
                </DropdownMenuItem>
                </Link>
                <Link to="/events/create">
                <DropdownMenuItem>
                  Create
                </DropdownMenuItem>
                </Link>
                <Link to="/pricing">
                <DropdownMenuItem>
                  Pricing
                </DropdownMenuItem>
                </Link>
                <Link to="/solutions">
                <DropdownMenuItem>
                  Solutions
                </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  {user ?  <Button onClick={handleLogout} variant="secondary" className="w-full text-sm">
                    Logout
                  </Button> :  <Button onClick={() => navigate('/login')} variant="secondary" className="w-full text-sm">
                    Login
                  </Button> }
                 
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
  
        </div>
      </Card>
    );
  };

export default Navbar;