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

export default function user() {
  return (
    <Html>
      
      <Body style={body}>
        <Container>
            <Section>
                <Img src="email/f5d85677-fe85-b064-8bff-862868f61c53.png" style={logo}></Img>
            </Section>
        <Heading >Optimization is a Collaborative Effort!</Heading>
        <Text>Inviting your teammate to use CloudCADI is now simple. Just click the button</Text>
        <Text>below and follow the steps.</Text>
        <Text>Spend Right on Cloud with Cloud CADI</Text>
        <Container>
        <Button pY={11} pX={23}>
        Invite Teammate
          </Button>
        </Container>
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