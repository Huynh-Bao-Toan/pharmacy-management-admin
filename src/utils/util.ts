import type { MenuProps } from 'antd'
import React from 'react'
export type MenuItem = Required<MenuProps>['items'][number]
//menu-antDesign
export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}
