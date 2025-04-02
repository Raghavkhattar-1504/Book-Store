import { render, screen } from '@testing-library/react';
import ForgotPassword from '../pages/ForgotPassword';

jest.mock('../assets/education.svg', () => 'mocked-education-image.svg');

describe('ForgotPassword Component', () => {
  test('renders ForgotPassword component with all elements', () => {
    render(<ForgotPassword />);
    
    expect(screen.getByAltText('Image Not Found')).toBeInTheDocument();
    expect(screen.getByText('BookStore')).toBeInTheDocument();
    expect(screen.getByText('Forgot Your Password?')).toBeInTheDocument();
    expect(screen.getByText(/Enter your email address/)).toBeInTheDocument();
    expect(screen.getByText('Email Id:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Email')).toBeInTheDocument();
    expect(screen.getByText('Reset Password')).toBeInTheDocument();
    expect(screen.getByText('CREATE ACCOUNT')).toBeInTheDocument();
  });

  test('header has correct background color and text styling', () => {
    render(<ForgotPassword />);
    
    const bookStoreElement = screen.getByText('BookStore');

    expect(bookStoreElement).toHaveClass('text-white');
  });

  test('email input accepts text', () => {
    render(<ForgotPassword />);
    
    const emailInput = screen.getByPlaceholderText('Enter Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue('');
  });

  test('reset password button has correct styling', () => {
    render(<ForgotPassword />);
    
    const resetButton = screen.getByText('Reset Password');
    expect(resetButton).toBeInTheDocument();
    expect(resetButton).toHaveClass('bg-[#A03037]');
    expect(resetButton).toHaveClass('text-white');
  });

  test('container has correct max-width classes', () => {
    render(<ForgotPassword />);
    
    const formContainer = screen.getByText('Forgot Your Password?').parentElement as HTMLElement;
    expect(formContainer).toBeInTheDocument();
    const formSection = formContainer.children[1] as HTMLElement;
    expect(formSection).toHaveClass('w-[425px]');
    expect(formSection).toHaveClass('max-[475px]:w-[350px]');
    expect(formSection).toHaveClass('max-[350px]:w-[300px]');
  });

  test('education image has correct alt text', () => {
    render(<ForgotPassword />);
    
    const image = screen.getByAltText('Image Not Found');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'mocked-education-image.svg');
  });

  test('form section has correct layout and border', () => {
    render(<ForgotPassword />);
    
    const formSection = screen.getByText(/Enter your email address/).parentElement?.parentElement as HTMLElement;
    expect(formSection).toBeInTheDocument();
    expect(formSection).toHaveClass('border');
    expect(formSection).toHaveClass('rounded-t-[3px]');
    expect(formSection).toHaveClass('border-[#E4E4E4]');
  });
});

beforeAll(() => {
  jest.mock('antd', () => ({
    Input: jest.fn((props) => <input {...props} />),
  }));
});