let uneVariableDeTypeString: number | string = 'hello';

uneVariableDeTypeString = 2;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${uneVariableDeTypeString}
  </div>
`;
