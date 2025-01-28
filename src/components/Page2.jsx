import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TagsInput } from "@/components/ui/tags-input";
import { Checkbox } from "@/components/ui/checkbox";
import FileUpload from "./FileUpload";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFormData } from "../services/formSlice";
import GuestList from "./GuestList";

const formSchema = z.object({
  guest_names: z.array(z.string()).nonempty("Please at least one item"),
  guests_emails: z.array(z.string()).nonempty("Please at least one item"),
  notify: z.unknown(),
  files: z.any().optional(),
  rsvp: z.string(),
  message: z.string().optional(),
});

const Page2 = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(updateFormData(data));
    navigate("/summary");
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const [guestNames, setGuestNames] = useState(
    form.getValues("guest_names") || []
  ); // Initial value for guest names

  const handleGuestNamesChange = (newGuestNames) => {
    setGuestNames(newGuestNames); // Update state when tags change
    form.setValue("guest_names", newGuestNames); // Update the form value as well
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-2/5 py-10"
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="guest_names"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Who is invited?</FormLabel>
                      <FormControl>
                        <TagsInput
                          value={field.value || []}
                          onValueChange={handleGuestNamesChange}
                          placeholder="Guest names"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="col-span-6">
                <FormField
                  control={form.control}
                  name="guests_emails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Emails</FormLabel>
                      <FormControl>
                        <TagsInput
                          value={field.value || []}
                          onValueChange={field.onChange}
                          placeholder="Guest emails"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="notify"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Notify via Email?</FormLabel>

                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control} // React Hook Form's control object
              name="files" // Field name
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Printable Design</FormLabel>
                  <FormControl>
                    <FileUpload
                      files={field.value || []} // Pass current form value to FileUpload
                      setFiles={(newFiles) => field.onChange(newFiles)} // Update form state on file change
                    />
                  </FormControl>
                  <FormDescription>Select a file to upload.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rsvp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Generate RSVP Links</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select RSVP policy" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Messge to the guests (if any)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <GuestList guestNames={guestNames} />
      </div>
    </>
  );
};

export default Page2;
