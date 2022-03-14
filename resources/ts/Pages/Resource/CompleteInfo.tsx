import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

type Props = {}

function CompleteInfo({}: Props) {
  return (
    <Dialog open={true}>
        <Box style={{width: 300, height: 300}}>
          <DialogTitle style={{fontSize: 30}}>Select</DialogTitle>
          <DialogContent>
              <DialogContentText>
                  <Button>
                      クイズ作成ページへ
                  </Button>
                  <Button>
                      ホーム画面へ
                  </Button>
              </DialogContentText>
          </DialogContent>
        </Box>
    </Dialog>
  )
}

export default CompleteInfo

