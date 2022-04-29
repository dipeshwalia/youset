import { useMutation } from "react-query";

const postOrder = ({ preferredPackageId, email, age, gender }: any) => {
  return fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ preferredPackageId, email, age, gender }),
  }).then((response) => response.json());
};

export const useOrder = () => {
  return useMutation(postOrder);
};
