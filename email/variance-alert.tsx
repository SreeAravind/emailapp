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

export default function alert() {
  return (
    <Html>
      
      <Body style={body}>
        <Container>
            <Section>
                <Img src="./f5d85677-fe85-b064-8bff-862868f61c53.png" style={logo}></Img>
            </Section>
        <Heading >Your Day Cloud Resources Utilization Alerts!</Heading>
        <Text>Your Consumption Since Last Day</Text>
        
        <Text>Advanced Threat Protection<Link>5.785688670196716</Link></Text>
        <Text>For any queries, write to us at<Link href="cloudcadi-support@amadisglobal.com">cloudcadi-support@amadisglobal.com</Link></Text>
        <Container>
           <Button href="https://cloudcadi-support@amadisglobal.com/"> <Img src="email/white2 (1).png"></Img></Button>
           <Heading><Link href="https://cloudcadi-support@amadisglobal.com/">Amadis - Navigate Cloud Native Innovation With Us.</Link></Heading>
           <Text>Embrace the cloud with our tailored cloud optimization solutions to hit your business goals at the right pace. Optimize your cloud than ever before.</Text>
           <Text><Link href="https://cloudcadi-support@amadisglobal.com/">amadisglobal.com</Link></Text>
        </Container>
        <Text>Want to change how you receive these emails?</Text>
        <Text>You can [*|UPDATE_PROFILE|*]<Link> update your preferences</Link>or [*|UNSUB|*]<Link> unsubscribe from this list.</Link></Text>


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
    width: '42px',
    height: '42px',
  };