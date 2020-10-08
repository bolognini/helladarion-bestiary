import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: var(--grey);
  height: 100vh;
  padding: 24px;
`

export const Perks = styled.div``

export const Name = styled.div`
  margin-bottom: 36px;
  h1 {
    font-size: 68px;
    font-family: var(--tormenta);
    color: var(--red);
  }
`

export const SkillsWrapper = styled.div`
  
`

export const Skills = styled.div`

`

export const AbilitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  margin-top: 36px;
  max-width: 660px;
`

export const Misc = styled.div`

`

export const Stats = styled.div`

`