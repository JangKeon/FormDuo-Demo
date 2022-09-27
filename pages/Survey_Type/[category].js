import * as React from 'react';
import { useRouter } from 'next/router'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../modules/components/Typography';

const Survey_Type = () => {
    const router = useRouter()
    const { category } = router.query;
    const alert_popup = category => {
        alert("이전 페이지에서 라우팅 된 Message : " + category);
    }
    return (
    <Container
        component="section"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
        <Button
            sx={{
            border: '4px solid currentColor',
            borderRadius: 0,
            height: 'auto',
            py: 2,
            px: 5,
            }}
        >
            <Typography variant="h4" component="span">
                {category}
            </Typography>
        </Button>
        <Button onClick={() => {alert_popup(category);}}>이전 정보 받아오기</Button>
    </Container>
  );
}

export default Survey_Type
