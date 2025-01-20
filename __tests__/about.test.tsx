import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AboutMe from 'src/components/about_me/index'
import { JOB_DESCRIPTION, NAME } from 'src/components/about_me/constants'
 
describe('About me conmponent', () => {
  it('renders theclear name', () => {
    render(<AboutMe />)
 
    const heading = screen.getByRole('heading', { level: 1, name:NAME })
 
    expect(heading).toBeInTheDocument()
  }),
  it('renders the job description', () => {
    render(<AboutMe />)
 
    const jobDescription = screen.getByText('Junior FrontEnd Developer')
 
    expect(jobDescription).toBeInTheDocument()
  })
})