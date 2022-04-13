export const saveToLocalStorage = (dataName: string, data: any) => {
  localStorage.setItem(dataName, JSON.stringify(data))
}

export const getFromLocalStorage = (dataName: string) => {
  const data = localStorage.getItem(dataName) || "[]"
  return JSON.parse(data)
}
