'use client'

import React, { useEffect } from 'react'
import { useLenis } from 'lenis/react'
import { cn } from '@/lib/utils'

interface ModalWrapperProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    className?: string
}

export function ModalWrapper({ isOpen, onClose, children, className }: ModalWrapperProps) {
    const lenis = useLenis()

    useEffect(() => {
        if (isOpen) {
            // Hard stop background scrolling
            lenis?.stop()
            document.body.style.overflow = 'hidden'

            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') onClose()
            }
            document.addEventListener('keydown', handleEscape)
            return () => document.removeEventListener('keydown', handleEscape)
        } else {
            // Resume scrolling
            lenis?.start()
            document.body.style.overflow = ''
        }
    }, [isOpen, lenis, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-modal flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 z-behind bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal Content container (handles internal scroll if needed) */}
            <div
                className={cn(
                    "relative z-base bg-[hsl(var(--color-bg))] rounded-[var(--radius-active)] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col",
                    className
                )}
                data-lenis-prevent // CRITICAL: Allows scrolling inside modal without triggering background scroll
            >
                {children}
            </div>
        </div>
    )
}
