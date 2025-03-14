import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/themeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean,
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {

    const {
        className,
        children,
        isOpen,
        onClose,
    } = props

    const ANIMATION_DELAY = 300
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const { theme } = useTheme()

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const contentClick = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if(event.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    return (

        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div 
                        className={cls.content} 
                        onClick={contentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    )
}