import { H5, Tabs, Text, ScrollView } from "tamagui";
import { MySecondaryStack } from "../../components/MyStack";
import CardComponent from "../../components/CardComponent";

export default function Tab4() {
  return (
    <MySecondaryStack style={{ backgroundColor: '#350A24', justifyContent: 'center' }}>
      <Tabs
        defaultValue="tab4"
        orientation="horizontal"
        flexDirection="column"
        width="100%"
      >
        <Tabs.Content value="tab4">
          {/* Envuelve tu contenido en un ScrollView */}
          <ScrollView>
            <Text textAlign="left" fontSize="36" fontWeight="900">DASHBOARD</Text>
            <Text textAlign="left" fontSize="36" fontWeight="900" color="#ff2900">CHARACTERS</Text>
            <CardComponent
                title="Gandalf"
                subtitle1="The Grey Wizard"
                subtitle2="Duration: 150 minutes"
                id="gandalf01"
                name="Gandalf"
                actorName="Ian McKellen"
                race="Maia"
                alignment="Good"
                backstory="A powerful wizard involved in the fight against Sauron."
                appearanceInFilms="The Lord of the Rings and The Hobbit trilogies"
                cost={1000}
                stock={5}
                sceneId={2}
                imageSrc="../assets/characters/gandalf.png"
                onEdit={() => console.log('Edit Gandalf')}
                onDelete={() => console.log('Delete Gandalf')}
              />
            <CardComponent
                title="Gandalf"
                subtitle1="The Grey Wizard"
                subtitle2="Duration: 150 minutes"
                id="gandalf01"
                name="Gandalf"
                actorName="Ian McKellen"
                race="Maia"
                alignment="Good"
                backstory="A powerful wizard involved in the fight against Sauron."
                appearanceInFilms="The Lord of the Rings and The Hobbit trilogies"
                cost={1000}
                stock={5}
                sceneId={2}
                imageSrc="../assets/characters/gandalf.png"
                onEdit={() => console.log('Edit Gandalf')}
                onDelete={() => console.log('Delete Gandalf')}
              />
          </ScrollView>
        </Tabs.Content>
      </Tabs>
    </MySecondaryStack>
  );
}
