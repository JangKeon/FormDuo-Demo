import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Button from '@mui/material/Button';
import {useState, useRouter} from 'next/router'

const rightLink = {
  fontSize: 16,
  color: 'common.black',
  ml: 3,
};

function AppAppBar() {

  const alert_popup = what_page => {
    alert(what_page + "페이지로 넘어갑니다.");
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <Button href = "/Home" onClick={() => {alert_popup("메인");}}>
            <img src = "/images/main2.png" style={{paddingTop: 5, width: 50, height: 70}}/>
            </Button>
          <Button href = "/Home" onClick={() => {alert_popup("메인");}}>
            <img src = "/images/formduo.png" style={{paddingTop: 6, paddingBottom: 6, width: 80, height: 60}}/>
            </Button>
          </Box>

          <Box sx={{ justifyContent: 'center', paddingLeft: 5, paddingright: 5}}>
            <Link
              variant="h6"
              underline="none"
              color="white"
              href="/Service_Intro"
              sx={{ fontSize: 20 }}
            >
              {'"폼듀"란?'}
            </Link>
            
            <Link
              variant="h6"
              underline="none"
              color="white"
              href="/Home/"
              sx={{ fontSize: 20, paddingLeft: 10}}
            >
              {'설문 목록'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="white"
              href="/Home"
              sx={{ fontSize: 20, paddingLeft: 10}}
            >
              {'설문 제작'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="white"
              href="/Home"
              sx={{ fontSize: 20, paddingLeft: 10}}
            >
              {'설문 분석'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="white"
              href="/Home"
              sx={{ fontSize: 20, paddingLeft: 10}}
            >
              {'FAQ'}
            </Link>

            <Link
              variant="h6"
              underline="none"
              color="white"
              href="/Home"
              sx={{ fontSize: 20, paddingLeft: 10}}
            >
              {'공지사항'}
            </Link>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link  href="/SignIn">
              <Button variant='contained' onClick={() => {alert_popup("로그인");}}>로그인</Button>
            </Link>
            <br></br>
            <Link href="/SignUp">
              <Button variant='contained' onClick={() => {alert_popup("회원가입");}}>회원가입</Button>
            </Link>
          </Box>
        </Toolbar>
        </AppBar>
        <Toolbar />
    </div>
  );
}

export default AppAppBar;
