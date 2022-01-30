export const API = "http://127.0.0.1:2189";

export const fetchAllCrewMembers = async () => {
    const response = await fetch(`${API}/crew-members`)
    const crewMembers = await response.json();
    return crewMembers;
};

export const fetchCrewMemberById = async (id: string) => {
    console.log(id)
    const response = await fetch(`${API}/crew-members/${id}`)
    const crewMember = await response.json();
    console.log(crewMember)
    return crewMember;
};


export const deleteCrewMemberById = async (id: number) => {
    const response = await fetch(`${API}/crew-members/${id}`, {
        method: 'DELETE',
    })
    if (response.ok) return true;
}

export const updateCrewMemberById = async (id: string, role: string, name: string) => {
    const data = { role, name };

    const response = await fetch(`${API}/crew-members/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })
    const updatedMember = await response.json();
    return updatedMember
}