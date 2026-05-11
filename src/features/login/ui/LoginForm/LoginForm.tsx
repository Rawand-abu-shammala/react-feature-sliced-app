import type { FormEvent } from "react";
import { useNavigate } from "react-router";

import ArrowRight from "@/shared/assets/icons/ArrowRight.svg?react";
import MailIcon from "@/shared/assets/icons/Mail.svg?react";
import PhoneIcon from "@/shared/assets/icons/Phone.svg?react";
import { AuthMethod, routePaths } from "@/shared/config";
import { useAppDispatch, useAppSelector } from "@/shared/lib";
import { AppIcon, Button, Input, PhoneInput, Tabs } from "@/shared/ui";
import "react-international-phone/style.css";

import { selectLoginEmail } from "@/features/login/model/selectors/selectLoginEmail/selectLoginEmail";
import { selectLoginError } from "@/features/login/model/selectors/selectLoginError/selectLoginError";



import { selectLoginIsLoading } from "@/features/login/model/selectors/selectLoginIsLoading/selectLoginIsLoading";
import { selectLoginMethod } from "@/features/login/model/selectors/selectLoginMethod/selectLoginMethod";
import { selectLoginPassword } from "@/features/login/model/selectors/selectLoginPassword/selectLoginPassword";
import { selectLoginPhone } from "@/features/login/model/selectors/selectLoginPhone/selectLoginPhone";
import { login } from "@/features/login/model/services/login";
import { loginActions } from "@/features/login/model/slice/loginSlice";

import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const email = useAppSelector(selectLoginEmail);
  const phone = useAppSelector(selectLoginPhone);
  const password = useAppSelector(selectLoginPassword);
  const method = useAppSelector(selectLoginMethod);
  const isLoading = useAppSelector(selectLoginIsLoading);
  const error = useAppSelector(selectLoginError);

  const handleChangeEmail = (value: string) => {
    dispatch(loginActions.setEmail(value));
  };
  const handleChangePhone = (value: string) => {
    dispatch(loginActions.setPhone(value));
  };

  const handleChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(login({ email, phone, password }));

    if (login.fulfilled.match(result)) {
      navigate(routePaths.home);
    }
  };

  const handleTabChange = () => {
    dispatch(
      loginActions.setMethod(
        method === AuthMethod.EMAIL ? AuthMethod.PHONE : AuthMethod.EMAIL
      )
    );
    dispatch(loginActions.resetForm());
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Tabs onChange={handleTabChange} defaultValue={method}>
        <Tabs.List>
          <Tabs.Trigger value={AuthMethod.EMAIL}>
            <AppIcon Icon={MailIcon} />
            Email
          </Tabs.Trigger>
          <Tabs.Trigger value={AuthMethod.PHONE}>
            <AppIcon Icon={PhoneIcon} />
            Phone
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={AuthMethod.EMAIL}>
          <Input
            label="Email"
            error={!!error}
            value={email}
            onChange={handleChangeEmail}
            type="email"
            className={styles.input}
            placeholder="Enter your email"
          />
        </Tabs.Content>
        <Tabs.Content value={AuthMethod.PHONE}>
          <PhoneInput
            label="Phone"
            error={!!error}
            onChange={handleChangePhone}
            value={phone}
            className={styles.input}
            placeholder="Enter your phone"
          />
        </Tabs.Content>
      </Tabs>
      <Input
        onChange={handleChangePassword}
        label="Password"
        value={password}
        type="password"
        className={styles.input}
        placeholder="Enter your password"
      />
      {error && <div className={styles.error}>{error}</div>}
      <Button
        isLoading={isLoading}
        fullWidth
        type="submit"
        className={styles.button}
        size="md"
      >
        Login <AppIcon Icon={ArrowRight} />
      </Button>
    </form>
  );
};
