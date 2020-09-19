import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
    Warnning = 'warnning'
}


interface IButtonProps {
    className?: string,
    disabed?: boolean,
    size?: ButtonSize,
    btnType?: ButtonType,
    children: React.ReactNode,
    href?: string
}

// type为类型别名
// React.ButtonHTMLAttributes获取button标签原props
// & 交叉类型将两种类型props合并
type NativeButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// a标签原始props合并
type AnchorButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLElement>

// Partial:将合并的属性全部设置为可选(原生button和a存在必须属性不同情况)
export type ButtonProps = Partial< NativeButtonProps & AnchorButtonProps >

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className, disabed, size, btnType, children, href,
        ...restProps // (获取剩余所有props)
    } = props
    // 默认样式名
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType, 
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabed
    })
    if (btnType === ButtonType.Link && href) {
        return (
        <a 
            {...restProps}
            className={classes}
            href={href}
        >
            {children}
        </a>
        )
    } else {
        return (
            <button
                {...restProps}
                className={classes}
                disabled={disabed}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    disabed: false,
    btnType: ButtonType.Default
}

export default Button