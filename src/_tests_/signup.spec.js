const signup=require('../routes/signup.svelte')
const {render,screen}=require('@testing-library/svelte')

it("has signup header",()=>{
    render(signup);
    const header=screen.getByRole("heading",{name:"Sign up"});
    expect(header).toBeInTheDocument();
})


