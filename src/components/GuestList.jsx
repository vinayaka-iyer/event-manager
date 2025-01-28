import { CheckCircle } from "lucide-react"; // Importing Lucide Icon
import { Card } from "@/components/ui/card"; // Optional: ShadCN Card Component

function GuestList({ guestNames }) {
  return (
    <div className="flex justify-center ml-4">
      {/* Optional: Use ShadCN's Card component */}
      <Card className="max-w-md shadow-lg bg-white rounded-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Guest List
          </h3>

          {/* If guestNames is empty, show a placeholder */}
          {guestNames?.length === 0 ? (
            <div className="text-center text-gray-500">
              No guests added yet.
            </div>
          ) : (
            <ul className="space-y-3">
              {guestNames?.map((guest, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-800 font-medium">{guest}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Card>
    </div>
  );
}

export default GuestList;
