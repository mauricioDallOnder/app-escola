import { AppBar, Toolbar, Button, Box,makeStyles } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

function MyAppBar() {
  const toolbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };
  
  const linkStyles = {
    textDecoration: 'none',
    color: 'AppWorkspace',
    margin: '0 16px',
    fontWeight: "700"
  };
  return (
    <AppBar position="fixed"  style={{ top: 0, height: '64px', zIndex: 1,background: "#202932" }}>
    <Toolbar sx={toolbarStyles}>
      <NavLink style={linkStyles} to="/UpdateAlunos">
        Atualizar dados dos alunos
      </NavLink>
      <NavLink style={linkStyles} to="/RegisterAlunos">
        Cadastrar novos alunos
      </NavLink>
      <NavLink style={linkStyles} to="/ListAllStudents">
        Lista de alunos
      </NavLink>
    </Toolbar>
  </AppBar>
  );
}

export default MyAppBar;
