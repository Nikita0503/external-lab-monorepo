import { SPRINTS } from '@external-lab-monorepo/constants';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDevMenu } from '../../contexts/DevMenuContext';
import styles from './DevMenu.styles';

const DevMenu = () => {
  const { sprint, setSprint, showDevMenu, setShowDevMenu } = useDevMenu();

  if (!showDevMenu) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View
        style={styles.container}
        pointerEvents={showDevMenu ? 'auto' : 'none'}
      >
        <Text style={styles.title}>Dev Menu</Text>
        <Text style={styles.subtitle}>Selected Sprint: {sprint}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSprint(SPRINTS.SPRINT_1)}
        >
          <Text style={styles.buttonText}>Sprint 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSprint(SPRINTS.SPRINT_2)}
        >
          <Text style={styles.buttonText}>Sprint 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSprint(SPRINTS.SPRINT_3)}
        >
          <Text style={styles.buttonText}>Sprint 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSprint(SPRINTS.SPRINT_4)}
        >
          <Text style={styles.buttonText}>Sprint 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowDevMenu(!showDevMenu)}
        >
          <Text style={styles.buttonText}>Hide Dev Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DevMenu;
