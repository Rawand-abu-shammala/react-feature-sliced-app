import {useTranslation} from "react-i18next";

import {useAddressListItem} from "@/features/manageAddress/lib/useAddressListItem";

import EditIcon from "@/shared/assets/icons/Edit.svg?react";
import {cn} from "@/shared/lib";
import {AppIcon, Button} from "@/shared/ui";

import type {ShippingAddress} from "../../model/types/Address";

import styles from "./AddressList.module.scss";
import {DeleteConfirmationModal} from "./DeleteConfimationModal";

interface AddressListItemProps {
    address: ShippingAddress;
}

export const AddressListItem = (props: AddressListItemProps) => {
    const {t} = useTranslation();
    const {address} = props;
    const {handleAddressSelect, handleClickEdit} = useAddressListItem()

    return (
        <div
            className={cn(styles["address-item"], {
                [styles.selected]: address.isDefault,
            })}
            onClick={() => handleAddressSelect(address)}
            tabIndex={0}
        >
            <div className={styles["address-info"]}>
                <div className={styles["radio-container"]}>
                    <input
                        type="radio"
                        name="selectedAddress"
                        checked={address.isDefault}
                        readOnly
                        className={styles["radio-button"]}
                    />
                </div>
                <div className={styles["address-details"]}>
                    <h3 className={styles["address-type"]}>{address.streetAddress}</h3>
                    <p className={styles["address-text"]}>
                        {address.city}, {address.zipCode}
                    </p>
                </div>
            </div>
            <div className={styles.actions}>
                <Button
                    theme="ghost"
                    size="sm"
                    className={styles.action}
                    onClick={(e) => handleClickEdit(e, address)}
                >
                    <AppIcon Icon={EditIcon}/>
                    {t("manageAddress.edit")}
                </Button>
                <DeleteConfirmationModal address={address}/>
            </div>
        </div>
    );
};
