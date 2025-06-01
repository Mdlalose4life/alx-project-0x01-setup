// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name} ({username})</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-blue-500 underline">{website}</p>

      <div className="mt-4 text-sm text-gray-700">
        <p><strong>Company:</strong> {company.name}</p>
        <p><em>{company.catchPhrase}</em></p>
        <p>{company.bs}</p>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p><strong>Address:</strong></p>
        <p>{address.suite}, {address.street}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
