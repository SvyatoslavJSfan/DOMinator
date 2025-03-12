/* eslint-disable import/no-extraneous-dependencies */
import { fireEvent, render, screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar', () => {
    test('data property present', () => {
        
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })

})
