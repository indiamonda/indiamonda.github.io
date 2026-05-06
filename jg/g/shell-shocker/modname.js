// Little Tutorial how to enable this mod file
// First search in the file __start__.js the line loadModName();
// Delete the // infront of it.
// Now in this file, search for the line called MODNAME
// Change MODNAME to your Mod name

// YouTube Tutorial how to make mods for NeXi-Client can be found here:
// ||||||||||||||||||||||||||||
// vvvvvvvvvvvvvvvvvvvvvvvvvvvv
// Coming soon

const loadModName = () => {
	Menu.prototype.initialize = function() {
        if (this.currentWidth = 0,
        this.currentHeight = 0,
        this.currentKey = !1,
        this.originRotation = 10,
        this.isMatchFound = !1,
        this.isConnected = !1,
        pc.session = {
            weapon: "Scar",
            character: "Lilium",
            hash: !1,
            username: !1
        },
        this.app.on("Player:Weapon", this.onWeaponSelect, this),
        this.app.on("Player:Character", this.onCharacterSelect, this),
        this.app.on("Template:Profile", this.onProfileData, this),
        this.app.on("Game:Found", this.onMatchFound, this),
        this.app.on("Game:Connect", this.onConnect, this),
        this.app.on("Menu:Mute", this.setMute, this),
        this.app.on("Menu:SetHome", this.setHome, this),
        this.app.on("Menu:KeyChange", this.setKey, this),
        this.app.on("Menu:CloseMobile", this.onCloseMobile, this),
        this.app.mouse.on("mousemove", this.onMouseMove, this),
        this.app.on("Menu:BuyOffer", this.onOfferBuy, this),
        this.app.on("Menu:CloseOffer", this.onOfferClose, this),
        this.app.on("Menu:GetBoost", this.onBoostGet, this),
        this.app.on("Menu:CloseBoost", this.onBoostClose, this),
        this.app.on("Buy:State", this.onMobileBuyState, this),
        this.app.on("Menu:Music", this.setMenuMusic, this),
        this.mobileUUID = !1,
        this.app.on("Account:CreateMobileUser", this.createMobileUser, this),
        this.app.on("Account:SaveUUID", this.onSaveUUID, this),
        this.app.on("Account:ChangeUsername", this.triggerChangeUsername, this),
        this.app.on("Account:ChangeStatus", this.onChangeStatus, this),
        this.app.on("Account:Reward", this.onAccountReward, this),
        this.app.on("Page:Menu", this.onPageChange, this),
        this.app.on("Tab:Settings", this.onSettings, this),
        this.setProfile(),
        this.app.fire("Menu:KeyboardConfiguration", !0),
        this.setBanner(),
        this.setMobileElements(),
        this.app.on("Sound:Play", this.onSoundPlay, this),
        this.attachCharacterEntity(),
        this.entity.on("destroy", this.onDestroy, this),
        // ||||||||||||||||||||
        // vvvvvvvvvvvvvvvvvvvv

        "undefined" != typeof VERSION_CODE && (this.versionEntity.element.text = "" + VERSION_CODE), //Type inside the "" your Modname
        
        // ^^^^^^^^^^^^^^^^^^^^
        // ||||||||||||||||||||
        window.addEventListener("resize", function() {
            "undefined" != typeof pc && pc.app.fire("DOM:Update", !0)
        }),
        window.oncontextmenu = function() {
            return !1
        }
        ,
        this.mobileRedirection && !pc.isMobile && (Utils.isIOS() ? this.mobileRedirection.enabled = !0 : this.mobileRedirection.enabled = !1),
        Utils.isMobile() && this.mobileFreeCoin.setLocalScale(1.2, 1.2, 1.2),
        pc.isMobile) {
            Utils.getItem("MobileUsernameChanged") && this.mobileUsernameChange.destroy();
            try {
                window.webkit.messageHandlers.iosListener.postMessage("request-uuid")
            } catch (e) {}
            "Offered" != Utils.getItem("MobileOffer") ? (this.offerPopup.enabled = !0,
            this.boostPopup.enabled = !1) : this.boostPopup.enabled = !0,
            this.offerAccepted = !1
        } else
            this.mobileUsernameChange.destroy();
        this.app.fire("Ads:Adblock", !0)
    }

    //Define your changes here aka. functions
    defaultMessage();
}

//Copy the functions from __game-scripts.js, paste them below here & make your changes here.
//DON'T CHANGE THE ACTUAL __game-scripts.js FILE IN ANYWAY

const defaultMessage = () => {
    //console.log('Mod loaded')
}
