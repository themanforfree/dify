'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'

type IAppUnavailableProps = {
  code?: number
  isUnknownReason?: boolean
  unknownReason?: string
}

const AppUnavailable: FC<IAppUnavailableProps> = ({
  code = 404,
  isUnknownReason,
  unknownReason,
}) => {
  const { t } = useTranslation()

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <h1 className='mr-5 h-[50px] leading-[50px] pr-5 text-[24px] font-medium'
        style={{
          borderRight: '1px solid rgba(0,0,0,.3)',
        }}>{code}</h1>
      <div className='text-sm'>{unknownReason || (isUnknownReason ? t('share.common.appUnknownError') : t('share.common.appUnavailable'))}</div>
    </div>
  )
}
export default React.memo(AppUnavailable)
