import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import GuestList from "../GuestList";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { addEvent } from "@/services/formSlice";

const Summary = () => {
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form.formData);
  console.log(formData);

  const dispatch = useDispatch();

  const saveEvent = () => {
    dispatch(
      addEvent({
        ...formData,
        date_from: formData.date_from.toISOString(),
        date_to: formData.date_to.toISOString(),
      })
    );
    navigate("/");
  };

  return (
    <div>
      <div className="flex gap-24 justify-center p-5">
        <Card className="md:w-2/5 mt-10 shadow-lg ">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <Table>
              {/* <TableHeader>
            <TableRow>
              <TableHead>Field Name</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader> */}
              <TableBody>
                {formData &&
                  Object.entries(formData).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium capitalize">
                        {key}
                      </TableCell>
                      <TableCell>
                        {key === "files"
                          ? value
                            ? value[0].name
                            : "N/A"
                          : `${value}`}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <GuestList guestNames={formData.guest_names} />
      </div>
      <div className="mt-4 sm:mr-96 mx-auto flex justify-end mr-12">
        <div className="flex gap-12">
          <Button onClick={saveEvent} className="w-48 h-10">
            Create Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
