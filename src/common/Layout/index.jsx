import React, { useRef } from "react"
import { Box } from "reakit"
import styled from "styled-components"
import Header from "app/common//Header"


const Wrapper = styled(Box)`
  display: flex;
  height: 100%;
  background-color: #f9f9f9;
`

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  justify-content: flex-start;
  overflow-y: scroll;
  position: relative;
`

const Content = styled(Box)`
  position: relative;
  margin: 30px;
  height: calc(100% - 60px);
`

const Layout = props => {
  const layout = useRef(null)

  return (
    <Wrapper>
      <Container ref={layout}>
        <Header className="blur-filter" />
        <Content className="page-content">{props.children}</Content>
      </Container>
    </Wrapper>
  )
}

export const useLayout = () => useContext(LayoutContext)

export default Layout
