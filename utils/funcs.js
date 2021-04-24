export const addMessage = async (amount, title, charity) => {
  try {
    let { body } = await supabase.from('causes').insert([{ amount, title, charity }])
    return body
  } catch (error) {
    console.log('error', error)
  }
}