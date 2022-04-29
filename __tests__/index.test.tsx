import { render, screen,  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a branding title', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Getting Insured is just few clicks away/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('book an order', async () => {
    render(<Home />)
    const user = userEvent.setup()
    const package1Id = '1'
    const package1 = screen.getByTestId(`tier-${package1Id}`)
    expect(package1).toBeInTheDocument()
    
    await user.click(screen.getByTestId(`select-tier-${package1Id}`))
    //  and this continues
  })
})
  