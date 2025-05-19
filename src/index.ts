export const handler = async (event: {name: string}) => {
    const result: string = event.name ? `good job ${event.name}!` : 'good job!'
    return result
} 