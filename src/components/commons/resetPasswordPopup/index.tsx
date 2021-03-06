import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useResetPassword } from '../../../hooks/credential';
import User from '../../../model/api/user';
import LoadingButton from '../loadingButton';
import SimpleDialog from '../popButton/Dialog';
import { ResetPasswordPopupContent } from './resetPasswordPopupContent';

interface props {
	user: User;
	realm: string;
	userStorage?: string;
}

export const ResetPasswordPopup = ({ user, realm, userStorage }: props) => {
	const [values, setValues] = useState({
		email: user.mail,
		senderEmail: undefined,
		signature: 'Assistance Insee',
		nameApp: undefined,
		assistMail: undefined,
	});
	const { t } = useTranslation();
	const { execute, loading } = useResetPassword();

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const onFinish = () => {
		const pcr = {
			mail: values.email,
			properties: {
				signature: values.signature,
				senderEmail: values.senderEmail,
				application: values.nameApp,
				assistMail: values.assistMail,
			},
		};
		execute(realm, user.username as string, pcr, userStorage).then(
			handleClose,
		);
	};

	return (
		<>
			<Button
				onClick={handleOpen}
				color="default"
				variant="contained"
			>
				{t('commons.reset_password.text')}
			</Button>
			<SimpleDialog
				onClose={handleClose}
				open={open}
				title={
					t('commons.reset_password.title') + user?.username
				}
				body={
					<ResetPasswordPopupContent
						values={values}
						setValues={handleInputChange}
					/>
				}
				actions={
					<LoadingButton
						handleClick={onFinish}
						loading={loading}
					>
						{t('commons.reset_password.send_button')}
					</LoadingButton>
				}
			/>
		</>
	);
};

export default ResetPasswordPopup;
