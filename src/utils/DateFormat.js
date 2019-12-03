export default (originalDate, seperator) => {
  const year = originalDate.getFullYear()
  const month = originalDate.getMonth()
  const date = originalDate.getDate()

  return `${year}${seperator}${month + 1}${seperator}${date}`
}
