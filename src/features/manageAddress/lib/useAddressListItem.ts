import type { MouseEvent } from "react";

import { useSetDefaultShippingAddressMutation } from "@/features/manageAddress/api/manageAddressApi";
import { manageAddressActions } from "@/features/manageAddress/model/slice/addressSlice";
import type { ShippingAddress } from "@/features/manageAddress/model/types/Address";

import { useAppDispatch } from "@/shared/lib";

export const useAddressListItem = () => {
    const dispatch = useAppDispatch();

    const [setDefault] = useSetDefaultShippingAddressMutation();

    const handleAddressSelect = (address: ShippingAddress) => {
        if (address.isDefault) return;

        setDefault({ id: address.id });
    };

    const handleClickEdit = (
        e: MouseEvent<HTMLButtonElement>,
        address: ShippingAddress
    ) => {
        e.stopPropagation();

        dispatch(
            manageAddressActions.initializeEditMode({
                id: address.id,
                form: {
                    city: address.city,
                    numberOfApartment: address.numberOfApartment,
                    streetAddress: address.streetAddress,
                    zipCode: address.zipCode,
                },
                location: [address.latitude, address.longitude],
            })
        );
    };

    return {
        handleAddressSelect,
        handleClickEdit
    }
}