import { AxiosError, AxiosResponse } from 'axios';
import { useTranslation } from 'react-i18next';

function isAxiosError(
	subject: AxiosError | AxiosResponse | any,
): subject is AxiosError {
	return (
		subject !== undefined &&
		(subject as AxiosError).isAxiosError === true
	);
}

function isAxiosResponse(
	subject: AxiosError | AxiosResponse | any,
): subject is AxiosResponse {
	return (
		subject !== undefined &&
		(subject as AxiosResponse).status !== undefined
	);
}

const TextNotification = (props: any) => {
	const { t } = useTranslation();
	let subject = props.subject;
	let message = '?';

	if (typeof subject === 'string') {
		message = subject;
	} else if (isAxiosResponse(subject)) {
		if (subject.status === 200) {
			message = t('notif.success');
		} else {
			message = subject.statusText;
		}
	} else if (isAxiosError(subject)) {
		if (subject.code === '403') {
			message = t('notif.forbidden');
		} else if (subject.message === 'Network Error') {
			message = t('notif.network_error');
		} else {
			message = subject.message;
		}
	}

	return <>{message}</>;
};

export default TextNotification;
