(function () {
    var NyxAlpha1 = Script.require('../nyx-helpers.js?12dsadsddsadssaddddsadassadasdsasaddseras3');

    var _entityID;
    var gunID;

    function generateQuatFromDegreesViaRadians(rotxdeg,rotydeg,rotzdeg) {
        var rotxrad = (rotxdeg/180)*Math.PI;
        var rotyrad = (rotydeg/180)*Math.PI;
        var rotzrad = (rotzdeg/180)*Math.PI;          
        var newRotation = Quat.fromPitchYawRollRadians(rotxrad,rotyrad,rotzrad); 
        return newRotation;
    }

    function equipGun() {
        var RIGHT_HAND_INDEX = MyAvatar.getJointIndex("RightHand");
        var localRot = generateQuatFromDegreesViaRadians(71.87 , 92 , -16.92);
        var gunURL = "https://bas-skyspace.ams3.digitaloceanspaces.com/MurderGame/gun.fbx?" + Date.now();

        gunID = Entities.addEntity( {
            type: "Model",
            name: "MurderGameGun",
            modelURL: gunURL,
            parentID: MyAvatar.sessionUUID,
            parentJointIndex: RIGHT_HAND_INDEX,
            localPosition: { x: 0.0179, y: 0.1467, z: 0.0305 },
            localRotation: localRot,
            localDimensions: { x: 0.0323, y: 0.1487, z: 0.2328 },                            
            color: { red: 200, green: 0, blue: 20 }, 
            collisionless: true,               
            dynamic: false,                
            lifetime: -1,
            userData: "{ \"grabbableKey\": { \"grabbable\": false, \"triggerable\": false}}" 
        },"avatar");

        NyxAlpha1.registerWithEntityMenu(gunID, {
            buttons: [
                {
                    name: 'Unequip'
                }
            ]
        });
    }

    function onEntityMenuTriggered(triggeredEntityID, command, menuItem) {
        if (menuItem === 'Equip' && triggeredEntityID === _entityID) {
            equipGun();
        }
        
        if (menuItem === 'Unequip' && triggeredEntityID === gunID) {
            Entities.deleteEntity(gunID);
        }
    }
    
    function onDynamicEntityMenuTriggered(triggeredEntityID, command, data) {
        if (data.name === 'Color Picker' && triggeredEntityID === _entityID) {
            Entities.editEntity(_entityID, { 
                color: { 
                    red: data.colors.rgba.r,
                    green: data.colors.rgba.g,
                    blue: data.colors.rgba.b
                },
                alpha: data.colors.rgba.a
            });
        }
        
        if (data.name === 'I Have A Slider' && triggeredEntityID === _entityID) {
            Entities.editEntity(_entityID, { 
                alpha: data.value
            });
        }
    }

    this.preload = function (entityID) {
        _entityID = entityID;

        var initialProps = Entities.getEntityProperties(_entityID, ['color', 'alpha']);
        
        NyxAlpha1.registerWithEntityMenu(entityID, {
            buttons: [
                {
                    name: 'Equip'
                }
            ],
            colorPickers: [
                {
                    name: 'Color Picker',
                    initialColor: {
                        r: initialProps.color.r,
                        g: initialProps.color.g,
                        b: initialProps.color.b,
                        a: '1'
                    }
                }
            ],
            sliders: [
                {
                    name: 'I Have A Slider',
                    step: 0.1,
                    color: 'yellow',
                    initialValue: initialProps.alpha,
                    minValue: 0,
                    maxValue: 1
                }
            ]
        });
        NyxAlpha1.entityMenuPressed.connect(onEntityMenuTriggered);
        NyxAlpha1.dynamicEntityMenuTriggered.connect(onDynamicEntityMenuTriggered);
    };

    this.unload = function () {
        NyxAlpha1.entityMenuPressed.disconnect(onEntityMenuTriggered);
        NyxAlpha1.dynamicEntityMenuTriggered.disconnect(onDynamicEntityMenuTriggered);
    };

});