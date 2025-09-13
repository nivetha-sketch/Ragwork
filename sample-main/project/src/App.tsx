import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Button, Input, Modal, Card } from './components';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import { Search, Heart, Download, User, Mail, Settings } from 'lucide-react';

const AppContainer = styled.div`
  min-height: 100vh;
  padding: ${theme.spacing['2xl']};
  position: relative;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.sans};
  font-size: 3rem;
  font-weight: ${theme.typography.fontWeight.bold};
  color:black;
  margin: 0 0 ${theme.spacing.md} 0;
`;

const Subtitle = styled.p`
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize.lg};
  color:black;
  font-weight: bold;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ComponentSection = styled.section`
  margin-bottom: ${theme.spacing['2xl']};
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.sans};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: #000000;
  margin: 0 0 ${theme.spacing.lg} 0;
  text-align: center;
`;

const ComponentGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const DemoCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(15px);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`Form submitted!\nUsername: ${formData.username}\nEmail: ${formData.email}`);
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('Search submitted:', searchValue);
    alert(`Searching for: ${searchValue}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <AnimatedBackground />
      <AppContainer>
        <Header>
          <Title>Component Library</Title>
          <Subtitle>
            Beautiful, accessible, and production-ready React components built with TypeScript and Styled Components
          </Subtitle>
        </Header>

        <ComponentGrid>
          <ComponentSection>
            <SectionTitle>Buttons</SectionTitle>
            <DemoCard>
              <ButtonGrid>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
                <Button loading>Loading</Button>
                <Button leftIcon={<Heart size={16} />}>With Icon</Button>
                <Button rightIcon={<Download size={16} />} size="sm">
                  Download
                </Button>
              </ButtonGrid>
            </DemoCard>
          </ComponentSection>

          <ComponentSection>
            <SectionTitle>Inputs</SectionTitle>
            <DemoCard>
              <InputGrid>
                <Input
                  label="Username"
                  placeholder="Enter username"
                  leftIcon={<User size={16} />}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  label="Search"
                  placeholder="Search items... (Press Enter to submit)"
                  leftIcon={<Search size={16} />}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onSubmit={handleSearchSubmit}
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your@email.com"
                  leftIcon={<Mail size={16} />}
                  helperText="We'll never share your email"
                />
                <Input
                  label="Success State"
                  placeholder="Looks good!"
                  state="success"
                  helperText="This input is valid"
                />
                <Input
                  label="Error State"
                  placeholder="Something's wrong"
                  errorMessage="This field is required"
                />
                <Input
                  label="Disabled"
                  placeholder="Cannot edit"
                  disabled
                  leftIcon={<Settings size={16} />}
                />
              </InputGrid>
            </DemoCard>
          </ComponentSection>

          <ComponentSection>
            <SectionTitle>Form Submission Example</SectionTitle>
            <DemoCard>
              <form onSubmit={handleFormSubmit}>
                <InputGrid>
                  <Input
                    label="Username"
                    name="username"
                    placeholder="Enter your username"
                    leftIcon={<User size={16} />}
                    value={formData.username}
                    onChange={handleInputChange('username')}
                    required
                    autoComplete="username"
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    leftIcon={<Mail size={16} />}
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    required
                    autoComplete="email"
                  />
                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange('password')}
                    required
                    autoComplete="current-password"
                  />
                </InputGrid>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <Button type="submit" variant="primary">
                    Submit Form
                  </Button>
                </div>
              </form>
            </DemoCard>
          </ComponentSection>

          <ComponentSection>
            <SectionTitle>Modal</SectionTitle>
            <DemoCard style={{ textAlign: 'center' }}>
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Welcome to our Component Library"
                footer={
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button
                      variant="ghost"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setIsModalOpen(false)}>
                      Got it!
                    </Button>
                  </div>
                }
              >
                <p>
                  This modal demonstrates our component library's capabilities. It features:
                </p>
                <ul style={{ textAlign: 'left', marginLeft: '1rem' }}>
                  <li>Smooth animations and transitions</li>
                  <li>Keyboard navigation (try pressing ESC)</li>
                  <li>Click outside to close</li>
                  <li>Accessible focus management</li>
                  <li>Responsive design</li>
                </ul>
                <p>
                  The modal is fully customizable with different sizes, footer content, and interaction patterns.
                </p>
              </Modal>
            </DemoCard>
          </ComponentSection>

          <ComponentSection>
            <SectionTitle>Cards</SectionTitle>
            <CardGrid>
              <Card
                title="Beautiful Design"
                subtitle="Thoughtful aesthetics"
                image="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                hoverable
              >
                Every component is designed with careful attention to detail, featuring smooth animations and beautiful color schemes.
              </Card>

              <Card
                variant="outlined"
                title="Fully Accessible"
                subtitle="WCAG compliant"
                hoverable
                footer={
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                }
              >
                Built with accessibility in mind, all components include proper ARIA labels, keyboard navigation, and screen reader support.
              </Card>

              <Card
                variant="elevated"
                title="TypeScript Ready"
                subtitle="Type-safe development"
                clickable
                onClick={() => alert('Card clicked!')}
              >
                Comprehensive TypeScript definitions ensure type safety and excellent developer experience with full IntelliSense support.
              </Card>

              <Card
                variant="flat"
                title="Production Ready"
                subtitle="Tested & documented"
                image="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                footer={
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'space-between' }}>
                    <Button size="sm" variant="ghost" leftIcon={<Heart size={14} />}>
                      Like
                    </Button>
                    <Button size="sm">Use Now</Button>
                  </div>
                }
              >
                Thoroughly tested with comprehensive Storybook documentation and ready for production use.
              </Card>
            </CardGrid>
          </ComponentSection>
        </ComponentGrid>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;