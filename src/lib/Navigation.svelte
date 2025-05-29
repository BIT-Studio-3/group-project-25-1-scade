<script>
    import { goto } from '$app/navigation'; // <-- add this import

    let isMenuOpen = false;
    let isProfileMenuOpen = false;
    let isMobile = false;

    function checkMobile() {
        isMobile = window.innerWidth <= 768;
    }



    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function toggleProfileMenu() {
        goto('/user');
    }

    function closeProfileMenu() {
        isProfileMenuOpen = false;
    }
</script>

<section>
    <nav>
        <div class="hamburger" on:click={toggleMenu}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

        <h1><a href="/" id="logo">SCADE</a></h1>

        <div class="menu" class:open={isMenuOpen}>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </div>

        <div class="profile">
            <img
                src="/images/profilepicture.png"
                alt="User Profile"
                class="profile-pic"
                on:click={toggleProfileMenu}
            />

            {#if isProfileMenuOpen}
                <div class="dropdown-menu">
                    <a href="/user" class="dropdown-button" on:click={closeProfileMenu}>Settings</a>
                    <button class="dropdown-button" on:click={closeProfileMenu}>Log Out</button>
                </div>
            {/if}
        </div>
    </nav>
</section>

<style>
    section {
    display: flex;
    align-items: center; 
    background-color: rgb(40, 51, 122);
    padding: 0; 
    flex-direction: row;
}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Distribute logo on the left and menu on the right */
    width: 100%;
    padding: 0 1px;
    position: relative; /* for dropdown positioning */
}
nav .menu a {
    color: rgb(255, 255, 255);
    text-align: left; 
    padding: 9px 20px; /* ↓ smaller vertical padding */
    text-decoration: none;
    font-weight: bold;
    font-size: large;
    border-radius: 5px;
}
nav .menu a:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(13, 33, 55);
}

#logo {
    font-family:'Times New Roman', Times, serif;
    color: #f9f9f9;
    text-decoration: none;
    font-size: larger;
    padding: 10px 20px;
    font-weight: lighter;
    flex: none;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    padding: 20px;
}

.bar {
    height: 3px;
    width: 25px;
    background-color: white;
    margin: 4px 0;
}
.profile {
    margin-left: auto; /* This will push the profile to the far right */
    display: flex;
    align-items: center;
    padding-right: 20px;
    position: relative; /* for dropdown */
}
.profile-pic {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: white;
    padding: 2px;
    flex: none;
    border: 1.5px solid black;
    cursor: pointer;
}
.profile-pic a:hover{
    background-color: rgba(13, 33, 55, 0);
}
.menu {
    display: flex;
    align-items: center; /* Vertically center contents */
    gap: 20px; /* Optional spacing between links */
}

.menu.open {
    display: flex;
}

/* Dropdown menu */
.dropdown-menu {
    position: absolute;
    top: 50px; /* below profile pic */
    right: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    min-width: 120px;
    z-index: 1000;
}
.dropdown-button {
    padding: 10px 15px;
    background: none;
    border: none;
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    color: #222;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
}
.dropdown-button:hover {
    background-color: #f0f0f0;
    color: #000;
}
.dropdown-button:focus {
    outline: none;
    background-color: #e0e0e0;
}

/* Responsive */
@media (min-width: 769px) {
    .menu {
        display: flex;
        flex-direction: row;
    }

    .hamburger {
        display: none;
    }
}

/* Mobile styles */
@media (max-width: 768px) {
    nav {
        display: flex;
        justify-content: space-between; /* spread left, center, right */
        align-items: center;
        padding: 0 20px;
        flex-wrap: nowrap; /* keep all in one row */
        position: relative;
        width: 100%;
    }

    h1 {
        margin: 0;
        padding: 0;
        flex: 1;
        text-align: center;
        position: static;
        width: auto;
    }

    .hamburger {
        display: flex;
        position: static;
        padding: 0;
        cursor: pointer;
        z-index: 10;
    }

    .profile {
        margin-left: 0;
        padding: 0;
    }

    .menu {
        position: absolute;
        top: 50px;
        left: 20px;
        background-color: rgb(40, 51, 122);
        border: 1px solid #222;
        border-radius: 5px;
        width: 150px;
        flex-direction: column;
        display: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        z-index: 999;
    }

    .menu.open {
        display: flex;
    }

    .menu a {
        padding: 10px 15px;
        border-bottom: 1px solid #333;
        color: white;
        font-weight: bold;
        font-size: large;
        text-decoration: none;
    }

    .menu a:last-child {
        border-bottom: none;
    }

    #logo {
        flex: 1;
    }

    .profile-pic {
        height: 32px;
        width: 32px;
    }
}

</style>
