import { useState } from "react";
import {
    API,
    deleteCrewMemberById,
    fetchAllCrewMembers,
    fetchCrewMemberById,
    updateCrewMemberById,
} from "../server/api";

const Api = () => {
    const [crewMember, setCrewMember] =
        useState<{ name: string; role: string; image: string }>();
    const [crewMembers, setCrewMembers] = useState<
        { name: string; role: string; image: string }[]
    >([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const findCrewMemberById = () => {
        console.log(id);
        if (!id) return;
        fetchCrewMemberById(id).then((res) => {
            if (res) {
                setCrewMember(res);
                console.log(res)
            }

        });
    };

    const findAllCrewMembers = () => {
        fetchAllCrewMembers().then((res) => setCrewMembers(res));
    };

    const deleteCrewMember = (index: number) => {
        deleteCrewMemberById(index).then((res) => {
            if (res) {
                let copyMembers = [...crewMembers];
                copyMembers.splice(index, 1);
                setCrewMembers(copyMembers);
            }
        });
    };

    const updateCrewMember = () => {
        updateCrewMemberById(id, role, name).then((res) => {
            setCrewMembers(res);
        });
    };

    return (
        <div>
            <div>
                <h1>Get crew member by ID</h1>
                <label>ID</label>
                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter ID"
                />
                <button onClick={findCrewMemberById}>Find</button>
                {crewMember && (
                    <div className="product">
                        <img
                            src={`${API}/image/${crewMember.image}`}
                            alt={crewMember.name}
                        />

                        <div className="product-info">
                            <h5 className="categories">{crewMember.name}</h5>
                            <h4 className="title">{crewMember.role}</h4>
                        </div>
                    </div>
                )}
            </div>
            <hr />
            <div>
                <h1>Get all crew members</h1>
                <button onClick={findAllCrewMembers}>Find</button>
                {crewMembers &&
                    crewMembers.map((curMember, index) => (
                        <div key={index}>
                            <img
                                src={`${API}/image/${curMember.image}`}
                                alt={curMember.name}
                            />
                            <h5 >{curMember.name}</h5>
                            <h4 >{curMember.role}</h4>
                            <button onClick={() => deleteCrewMember(index)}>Delete</button>
                        </div>
                    ))}
            </div>
            <hr />
            <div>
                <h1>Update crew member</h1>
                <input
                    type="text"
                    placeholder="Enter ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <button onClick={updateCrewMember}>Update</button>
            </div>
        </div>
    );
};

export default Api;
