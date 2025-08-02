
import type { ReactNode } from 'react';
import classes from './Modal.module.css';

type Props = {
    title: string;
    message: ReactNode;
    buttons: Record<string, () => void>;
};

export function Modal({ title, message, buttons }: Props) {
    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <div className={classes.title}>{title}</div>
                <div className={classes.message}>{message}</div>
                <div className={classes.buttons}>
                    {Object.entries(buttons).map(([key, value]) => (
                        <button key={key} onClick={value}>{key}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}
