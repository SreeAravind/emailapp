import {
    Body,
    Button,
    Container,
    Heading,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
  } from '@react-email/components';
import * as React from 'react';

export default function Email() {
  return (
    <Html>
      
      <Body style={body}>
        <Container>
            <Section>
                <Img src="email/f5d85677-fe85-b064-8bff-862868f61c53.png" style={logo}></Img>
            </Section>
        <Heading >A new password was requested for your CloudCADI account.</Heading>
        <Text>Reset your password by clicking the button below if it was you.</Text>
        <Container>
        <Button pY={11} pX={23}>
            Reset Password
          </Button>
        </Container>
        <Text>Ignore this mail if you haven't requested.</Text>
        <Text>For any queries, write to us at<Link href="cloudcadi-support@amadisglobal.com">cloudcadi-support@amadisglobal.com</Link></Text>
        <Text>Want to change how you receive these emails?</Text>
        <Text>You can<Link> update your preferences</Link>or<Link> unsubscribe from this list.</Link></Text>


        </Container>
      </Body>
    </Html>
  );
}
const body = {
    borderColor: '#dfe1e4',
    background: '#000', 
    color: '#fff'


    
};
const logo = {
    width: 42,
    height: 42,
  };